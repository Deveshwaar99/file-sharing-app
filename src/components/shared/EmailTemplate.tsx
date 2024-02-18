import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
  Link,
} from '@react-email/components'
import * as React from 'react'

interface EmailTemplateProps {
  fileName: string
  fileType: string
  createdAt: string
  downloadUrl: string
  userName: string
}
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || ''

export const EmailTemplate = ({
  fileName,
  fileType,
  createdAt,
  downloadUrl,
  userName,
}: EmailTemplateProps) => {
  return (
    <Html>
      <Head />
      <Preview>Sharewave file share</Preview>
      <Body style={main}>
        <Container>
          <Section style={logo}>
            <Img src={`${baseUrl}/image/logo.png`} width={20} height={20} />
          </Section>

          <Section style={content}>
            <Row>
              <Img style={image} width={25} height={25} src={`${baseUrl}/image/zip.png`} />
            </Row>

            <Row style={{ ...boxInfos, paddingBottom: '0' }}>
              <Column>
                <Heading
                  style={{
                    fontSize: 32,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}
                >
                  Hi 👋,
                </Heading>
                <Heading
                  as="h2"
                  style={{
                    fontSize: 26,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}
                >
                  {userName} has shared a file with you.
                </Heading>

                <Text style={paragraph}>
                  <b>Name: </b>
                  {fileName}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Type:</b>
                  {fileType}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Created At: </b>
                  {createdAt}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Url: </b>
                  {downloadUrl}
                </Text>

                <Text style={paragraph}>You can click on the link to download</Text>
              </Column>
            </Row>
            <Row style={{ ...boxInfos, paddingTop: '0' }}>
              <Column style={containerButton} colSpan={2}>
                <Link href={downloadUrl} className="download-button">
                  Download File
                </Link>
              </Column>
            </Row>
          </Section>

          <Section style={containerImageFooter}>
            <Img style={image} width={620} src={`${baseUrl}/static/yelp-footer.png`} />
          </Section>

          <Text
            style={{
              textAlign: 'center',
              fontSize: 12,
              color: 'rgb(0,0,0, 0.7)',
            }}
          >
            © 2024 | Sharewave | {baseUrl}
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: '#fff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const paragraph = {
  fontSize: 16,
}

const logo = {
  padding: '30px 20px',
}

const containerButton = {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
}

const button = {
  backgroundColor: '#e00707',
  borderRadius: 3,
  color: '#FFF',
  fontWeight: 'bold',
  border: '1px solid rgb(0,0,0, 0.1)',
  cursor: 'pointer',
  padding: '12px 30px',
}

const content = {
  border: '1px solid rgb(0,0,0, 0.1)',
  borderRadius: '3px',
  overflow: 'hidden',
}

const image = {
  maxWidth: '100%',
}

const boxInfos = {
  padding: '20px',
}

const containerImageFooter = {
  padding: '45px 0 0 0',
}
