import type { NextApiRequest, NextApiResponse } from 'next'

type SubscribeBody = {
  firstName: string
  email: string
  whoAreYou: string
  publishPlatform: string
}

type ResponseData = {
  message?: string
  alreadySubscribed?: boolean
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { firstName, email, whoAreYou, publishPlatform } = req.body as SubscribeBody

  if (!firstName || !email || !whoAreYou || !publishPlatform) {
    return res.status(400).json({ message: 'Missing required fields' })
  }

  const apiKey = process.env.BEEHIIV_API_KEY
  const publicationId = process.env.BEEHIIV_PUBLICATION_ID

  if (!apiKey || !publicationId) {
    console.error('Missing BEEHIIV_API_KEY or BEEHIIV_PUBLICATION_ID env vars')
    return res.status(500).json({ message: 'Server configuration error' })
  }

  try {
    const beehiivRes = await fetch(
      `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          email,
          first_name: firstName,
          utm_source: 'landing_page',
          utm_medium: 'waitlist_form',
          custom_fields: [
            {
              name: 'who_are_you',
              value: whoAreYou,
            },
            {
              name: 'publish_platform',
              value: publishPlatform,
            },
          ],
        }),
      }
    )

    const data = await beehiivRes.json()

    // Beehiiv returns 201 on creation; handle already-subscribed case
    if (beehiivRes.status === 409) {
      return res.status(409).json({ alreadySubscribed: true })
    }

    // Some Beehiiv plans return 200/201 but with a status field indicating duplicate
    if (
      data?.data?.status === 'validating' ||
      data?.data?.status === 'inactive'
    ) {
      // Still treat as success — subscriber exists, they'll be notified
    }

    if (!beehiivRes.ok) {
      console.error('Beehiiv API error:', data)
      return res.status(502).json({ message: 'Upstream error. Please try again.' })
    }

    return res.status(200).json({ message: 'Subscribed successfully' })
  } catch (err) {
    console.error('subscribe handler error:', err)
    return res.status(500).json({ message: 'Internal server error' })
  }
}
