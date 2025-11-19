import { ImageResponse } from 'next/og'
 
// Route segment config
export const runtime = 'edge'
 
// Image metadata
export const alt = 'DeSuite - The Tokenized Asset Layer for Oracle ERP'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
// Image generation
export default async function Image() {
  
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          // A nice professional gradient background
          background: 'linear-gradient(to bottom right, #ffffff, #e0f2fe)',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Background Circle Decoration */}
        <div
            style={{
                position: 'absolute',
                top: -100,
                left: -100,
                width: 400,
                height: 400,
                background: '#2563eb',
                borderRadius: '50%',
                opacity: 0.1,
            }}
        />

        {/* Logo Area */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 60,
                height: 60,
                background: '#2563eb',
                color: 'white',
                borderRadius: '12px',
                fontSize: 32,
                fontWeight: 'bold',
                marginRight: 20
            }}>
                DS
            </div>
            <div style={{ fontSize: 60, fontWeight: 'bold', color: '#111827' }}>
                DeSuite
            </div>
        </div>

        {/* Tagline */}
        <div style={{ fontSize: 30, color: '#4b5563', maxWidth: 800, textAlign: 'center', lineHeight: 1.4 }}>
            The Stablecoin & Tokenization Layer for Oracle ERP
        </div>

        {/* Trust Badge */}
        <div style={{ 
            marginTop: 40, 
            padding: '10px 30px', 
            background: '#fff', 
            borderRadius: 30, 
            border: '1px solid #e5e7eb',
            fontSize: 20,
            color: '#2563eb',
            fontWeight: 'bold',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        }}>
            Enterprise Ready
        </div>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  )
}