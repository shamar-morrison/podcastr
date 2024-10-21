import { useQuery } from "convex/react"
import PodcastCard from "@/components/podcast-card"
import LoaderSpinner from "@/components/loading-spinner"

function Home() {
  const trendingPodcasts = useQuery(api.podcasts.getTrendingPodcasts)

  if (!trendingPodcasts) return <LoaderSpinner />

  return (
    <div className="mt-9 flex flex-col gap-9 md:overflow-hidden">
      <section className="flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">Trending Podcasts</h1>

        <div className="podcast_grid">
          {trendingPodcasts?.map(
            ({ _id, podcastTitle, podcastDescription, imageUrl }) => (
              <PodcastCard
                key={_id}
                imgUrl={imageUrl as string}
                title={podcastTitle}
                description={podcastDescription}
                podcastId={_id}
              />
            ),
          )}
        </div>
      </section>
    </div>
  )
}

export default Home