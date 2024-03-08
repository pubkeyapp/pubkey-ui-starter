import { useMutation } from '@tanstack/react-query'
import { AttributesMap, MediaResponse } from '../types'
import { useFetchable } from './use-fetchable'

function useGenerateMediaFetch() {
  const endpoint = '/api/generate-image'
  return useMutation({
    mutationFn: (payload: AttributesMap) => {
      console.log({
        endpoint,
        payload,
      })
      return fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }).then((res) => {
        console.log('Response', res)
        if (!res.ok) {
          throw new Error('Failed to generate media')
        }
        return res.json()
      })
    },
  })
}

export function useGenerateMedia() {
  const [state, setState] = useFetchable<MediaResponse>()

  const mutation = useGenerateMediaFetch()
  const tryGeneratePreview = async (payload: AttributesMap) => {
    // Always set loading true
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }))

    try {
      console.log('Generating media preview...')

      // Try to character preview
      const { primary, pfp } = await mutation.mutateAsync(payload)

      console.log(`Generated media preview`, { media: { primary, pfp } })

      if (!primary || !pfp) {
        throw new Error('Something went wrong generating the media')
      }

      setState((prev) => ({
        ...prev,
        data: {
          primary: `data:image/png;base64,${primary}`,
          pfp: `data:image/png;base64,${pfp}`,
        },
      }))
    } catch (error) {
      console.log('Error generating media preview', error)
      // Whoops
      setState((prev) => ({
        ...prev,
        error: String(error),
      }))
    } finally {
      // Always set loading false and fetched true
      setState((prev) => ({
        ...prev,
        isLoading: false,
        isFetched: true,
      }))
    }
  }

  return {
    mediaState: state,
    generatePreview: tryGeneratePreview,
  }
}
