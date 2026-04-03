import { Cloud, ICloud } from 'react-icon-cloud'

const cloudProps: Omit<ICloud, 'children'> = {
  containerProps: {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: 'default',
    tooltip: 'native',
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: '#0000',
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
}

interface IconCloudProps {
  images: string[]
}

export function IconCloud({ images }: IconCloudProps) {
  return (
    // @ts-ignore
    <Cloud {...cloudProps}>
      {images.map((src, i) => (
        // @ts-ignore
        <a key={i} href="#" onClick={(e) => e.preventDefault()}>
          <img height="42" width="42" alt="" src={src} />
        </a>
      ))}
    </Cloud>
  )
}
