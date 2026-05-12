const DEFAULT_API_BASE_URL = "https://am-arena-api-abgpf6egdeanfjc6.uaenorth-01.azurewebsites.net"

export type ApiEnvelope<T> = {
  success: boolean
  message?: string
  data: T
  meta?: Record<string, unknown>
}

export type ApiQueryValue = string | number | boolean | null | undefined
export type ApiQuery = Record<string, ApiQueryValue>

const getApiBaseUrl = () => {
  const configuredUrl = process.env.NEXT_PUBLIC_API_URL?.trim()

  if (configuredUrl) {
    return configuredUrl.replace(/\/+$/, "")
  }

  return DEFAULT_API_BASE_URL
}

export async function fetchApi<T>(path: string, query?: ApiQuery): Promise<T> {
  const url = new URL(`${getApiBaseUrl()}${path}`)

  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      if (value === null || value === undefined) {
        return
      }

      url.searchParams.set(key, String(value))
    })
  }

  const response = await fetch(url.toString(), {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    cache: "no-store",
  })

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`)
  }

  const payload = (await response.json()) as ApiEnvelope<T> | T

  if (payload && typeof payload === "object" && "success" in payload) {
    const envelope = payload as ApiEnvelope<T>

    if (!envelope.success) {
      throw new Error(envelope.message || "API request was not successful")
    }

    return envelope.data
  }

  return payload as T
}

export type PubgTournament = {
  id: number
  title?: string | null
  description?: string | null
  entry_fee?: string | number | null
  prize_pool?: string | number | null
  reward_text?: string | null
  max_players?: number | null
  start_date?: string | null
  is_active?: boolean | null
  is_super?: boolean | null
  Xp_condition?: number | null
  registered_count?: number | null
  participant_count?: number | null
  game_type?: string | null
  game?: {
    id?: number | null
    type?: string | null
    image?: string | null
  } | null
}

export type BestPlayer = {
  id: number
  full_name?: string | null
  gamer_name?: string | null
  avatarUrl?: string | null
  xp_points?: number | null
  selected_achievement?: {
    name?: string | null
    color_theme?: string | null
    icon_url?: string | null
  } | null
  achievements?: Array<{
    achievement?: {
      name?: string | null
      color_theme?: string | null
      icon_url?: string | null
    } | null
  }>
}

export async function fetchPubgTournaments() {
  return fetchApi<PubgTournament[]>('/pubg-tournament', { is_active: true })
}

export async function fetchBestPlayers() {
  return fetchApi<BestPlayer[]>('/user/best')
}
