"use client"

import { useState, useEffect, useRef, useCallback } from "react"

export function useInfiniteScroll({ initialData = [], fetchData, itemsPerPage = 10, initialPage = 1, delay = 500 }) {
  const [data, setData] = useState(initialData)
  const [page, setPage] = useState(initialPage)
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const observer = useRef(null)

  const loadMoreData = useCallback(async () => {
    if (loading || !hasMore) return

    setLoading(true)

    try {
      // Simular un retraso para mostrar el estado de carga
      await new Promise((resolve) => setTimeout(resolve, delay))

      const newItems = await fetchData(page)

      if (newItems && newItems.length > 0) {
        setData((prev) => [...prev, ...newItems])
        setPage((prev) => prev + 1)
      } else {
        setHasMore(false)
      }
    } catch (error) {
      console.error("Error loading data:", error)
      setHasMore(false)
    } finally {
      setLoading(false)
    }
  }, [fetchData, page, loading, hasMore, delay])

  // Cargar datos iniciales
  useEffect(() => {
    if (initialData.length === 0) {
      loadMoreData()
    }
  }, [])

  // Configurar el observador de intersección para el scroll infinito
  const lastElementRef = useCallback(
    (node) => {
      if (loading) return

      if (observer.current) observer.current.disconnect()

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMoreData()
        }
      })

      if (node) observer.current.observe(node)
    },
    [loading, hasMore, loadMoreData],
  )

  return { data, loading, hasMore, lastElementRef, loadMoreData }
}
