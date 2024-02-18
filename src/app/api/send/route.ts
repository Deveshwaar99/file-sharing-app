import { EmailTemplate } from '../../../components/shared/EmailTemplate'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const body = await req.json()

  const { fileName, fileType, createdAt, downloadUrl, userName, reciever } = body

  try {
    const data = await resend.emails.send({
      from: 'Sharewave <onboarding@resend.dev>',
      to: [`${reciever}`],
      subject: 'Sharewave file share',
      text: 'Sharewave file share',
      // react: EmailTemplate({ firstName: 'John' }),
      react: EmailTemplate({
        fileName,
        fileType,
        createdAt,
        downloadUrl,
        userName,
      }),
    })

    return Response.json(data)
  } catch (error) {
    return Response.json({ error })
  }
}
