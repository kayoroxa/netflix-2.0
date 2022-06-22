export interface I_TextLyrics {
  en: string
  pt: string
  start: number
  end: number
}

export interface I_Text {
  lyrics: I_TextLyrics[]
  title: string
  description: string
  img?: string
  isOnYouTube?: boolean
  audioUrl: string
}
