import React from "react"

export default function GiphyImage({giphyInfo}) {
    return (
        <div>
            <img src={giphyInfo.data.images.downsized_large.url} alt='giph'/>
        </div>
    )
}