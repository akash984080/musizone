import React, { useEffect } from 'react'

export const usetitle = (title) => {
    useEffect(() => {
        document.title = `${title} | Musizone `
    }, [title])
    return null
}
