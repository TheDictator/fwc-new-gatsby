
import React from "react"
import { Link } from "gatsby"
import { decodeHtmlCharCodes, capitalizeFirstLetter } from '../../utils';
import PostCategories from "./categories"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const PostCards = ({ posts }) => {

  return (
      <>
      {posts.map(({ node }: { wpPost: wpPost }) => {
							
            const categories: CategoryTagInfo[] = (node.categories && node.categories.length) > 0 ? node.categories.filter((category) => category.name !== 'Uncategorized') : new Array<CategoryTagInfo>();
            const tags: CategoryTagInfo[] = (node.tags && node.tags.length > 0) ? node.tags : new Array<CategoryTagInfo>();
            const authorImage = getImage(node.author.node.avatar);
            // const featuredImage = getImage(node.featuredImage.node.localFile);
            return (
                <div key={node.id} className="card flex flex-col rounded-lg shadow-lg overflow-hidden">
                    <div className="flex-shrink-0">
                        <Link to={node.url} title={node.slug}>
                            {/* <GatsbyImage image={featuredImage} alt={node.title} /> */}
                        </Link>
                    </div>
                    <div className="flex-1 bg-white p-6 pt-0 flex flex-col justify-between">
                        <div className="flex-1 categories-container">
                            <PostCategories categories={node.categories} />
                            <Link to={node.uri} title={node.title} className="block mt-2">
                                <p className="text-xl font-semibold text-black-400 title">{node.title}</p>
                                <div className="mt-3 text-base text-gray-500" dangerouslySetInnerHTML={{ __html: decodeHtmlCharCodes(node.excerpt) }}></div>
                            </Link>
                        </div>
                        <div className="mt-6 flex items-center">
                            <div className="flex-shrink-0">
                                <Link to={node.author.node.uri} title={node.author.node.name}>
                                    <span className="sr-only">{node.author.node.name}</span>
                                    <GatsbyImage image={authorImage} alt="" />
                                </Link>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-bold text-gray-900">
                                <Link to={node.author.node.uri} className="hover:underline">
                                    {node.author.node.name}
                                </Link>
                                </p>
                                <div className="flex space-x-1 text-sm text-gray-500">
                                    <time dateTime={node.date}>{(node.modified && node.modified.length > 0) ? node.modified : node.date}</time>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        })}
      </>
  )
}

export default PostCards