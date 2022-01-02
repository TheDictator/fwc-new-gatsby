import React, { Fragment, ReactNode } from "react"
import words from "./words"
import { TagCloud } from "react-tagcloud"
import { navigate } from "gatsby"
export interface Props {
    title?: ReactNode
}
export const TagCloudd = () => {
    const goToTag = (tag: any) => {
        const tagUri = tag.value.replace(/\s+/g, "-").toLowerCase()
        navigate(`/tag/${tagUri}`)
    }

    return (
        <Fragment>
            <h3 className="text-xl text-center text-gray-500 mt-4">
                Tag Cloud
            </h3>
            <TagCloud
                minSize={12}
                maxSize={35}
                tags={words}
                className="simple-cloud"
                onClick={goToTag}
            />
        </Fragment>
    )
}

export default TagCloudd
