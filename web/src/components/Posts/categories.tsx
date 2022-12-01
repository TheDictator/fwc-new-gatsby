
import React from "react"
import { Link } from "gatsby"
import { capitalizeFirstLetter } from '../../utils';

const PostCategories = ({ categories }) => {
  if (!categories?.nodes || categories.nodes === 0) return null

  return (
      <>
        {categories.nodes.map((category, index) => (
            <Link to={`/category/${category.slug}`}  key={index} rel="category tag" className="inline-block" title={category.name}>
                <span
                className=
                    'bg-gray-600 text-white inline-flex items-center px-3 py-0.5 rounded-full text-sm font-bold mb-1 mr-1 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
                >
                    {capitalizeFirstLetter(category.name)}
                </span>
            </Link>
        ))}
      </>
    
  )
}

export default PostCategories