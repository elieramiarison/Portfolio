// import { useEffect, useState } from "react"
// import type { ReviewType } from "../types/review"

// const useReview = () => {
//     const [data, setData] = useState<ReviewType[]>([])
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);
//     useEffect(() => {
//         const fetchDoctors = async () => {
//             try {
//                 const res = await fetch('/api/review')
//                 const data = await res.json()
//                 setData(data)
//             } catch (error: unknown) {
//                 setError(error instanceof Error ? error.message : 'Une erreur inconnue est survenue');
//             } finally {
//                 setLoading(false);
//             }
//         }
//         fetchDoctors()
//     }, [])
//     return { data, loading, error }

// }

// export default useReview

import { useEffect, useState, useCallback } from "react"
import type { ReviewType } from "../types/review"

const useReview = () => {
    const [data, setData] = useState<ReviewType[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const fetchReviews = useCallback(async () => {
        try {
            setLoading(true)
            const res = await fetch('/api/review')
            const json = await res.json()
            setData(json)
        } catch (error: unknown) {
            setError(error instanceof Error ? error.message : 'Une erreur inconnue est survenue')
        } finally {
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        fetchReviews()
    }, [fetchReviews])

    return { data, loading, error, refetch: fetchReviews }
}

export default useReview
