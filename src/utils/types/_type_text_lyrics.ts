export interface I_TextLyrics {
  en: string
  pt: string
  start: number
  end: number
}

export interface I_Text {
  lyrics: I_TextLyrics[]
  isOnYouTube?: boolean
  audioUrl: string
}
