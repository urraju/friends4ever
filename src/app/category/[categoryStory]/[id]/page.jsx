"use client";
import CategoryTextColor from "@/shared/CategoryTextColor/CategoryTextColor";
import HeaderBanner from "@/shared/HeaderBanner/HeaderBanner";
import SuggestCategory from "../../suggestCategory/page";
import useFetchStory from "@/hooks/useFetchStory";
import Spinner from "@/shared/Loading/Loading";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  PinterestShareButton,
  PinterestIcon,
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share";
import Head from "next/head";
import DescriptionLoad from "@/shared/Loading/DescriptionLoad";

const StoryDetails = ({ params }) => {
  const { id } = params;
  const { data, loading } = useFetchStory(id);

  const shareUrl = window.location.href;
  const title = data.story_name;
  const description = `${data.story_des}\n\nCategory: ${data.category}\nDate: ${data.story_date}`;
  const image = data.story_image;
  return (
    <>
      {" "}
      <Head>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={shareUrl} />
        <meta property="og:type" content="article" />
      </Head>
      <section className="mt-2">
        <HeaderBanner heading="Every story details page" />
        <div className="max-w-screen-2xl mx-auto mt-2 grid grid-cols-12 gap-5">
          {loading ? (
            Array.from({ length: data.length || 8 }).map((_, index) => (
              <DescriptionLoad key={index} />
            ))
          ) : (
            <div className="p-2  col-span-7 border-r">
              <h1 className="text-xl font-bold mb-2">{data.story_name}</h1>
              <img
                src={data.story_image}
                alt={data.story_name}
                className="w-full h-80 object-cover rounded-md mb-4"
              />
              <p className={`text-gray-500 mb-2 capitalize`}>
                <CategoryTextColor text={data.category} textSize={`20px`} />
              </p>
              <p className="text-gray-500 mb-4 leading-relaxed">
                {data.story_date}
              </p>
              <p>{data.story_des}</p>

              {/* Social Share Buttons */}
              <div className="my-4">
                <p className="text-xl font-medium border-b inline-block p-1">
                  Share on your social media :{" "}
                </p>
                <div className="flex gap-4 mt-4">
                  <FacebookShareButton
                    url={shareUrl}
                    quote={description}
                    hashtag={`#${data.category}`}
                  >
                    <FacebookIcon size={32} round />
                  </FacebookShareButton>
                  <TwitterShareButton
                    url={shareUrl}
                    title={title}
                    via="your_twitter_handle"
                    hashtags={[data.category]}
                  >
                    <TwitterIcon size={32} round />
                  </TwitterShareButton>
                  <LinkedinShareButton
                    url={shareUrl}
                    title={title}
                    summary={description}
                    source="YourSiteName"
                  >
                    <LinkedinIcon size={32} round />
                  </LinkedinShareButton>
                  <PinterestShareButton
                    url={shareUrl}
                    media={image}
                    description={description}
                  >
                    <PinterestIcon size={32} round />
                  </PinterestShareButton>
                  <WhatsappShareButton
                    url={shareUrl}
                    title={title}
                    separator=":: "
                  >
                    <WhatsappIcon size={32} round />
                  </WhatsappShareButton>
                  <EmailShareButton
                    url={shareUrl}
                    subject={title}
                    body={description}
                  >
                    <EmailIcon size={32} round />
                  </EmailShareButton>
                </div>
              </div>
            </div>
          )}

          <div className="col-span-5 ">
            <p className="text-xl font-bold mb-2">All Category</p>
            <SuggestCategory />
          </div>
        </div>
      </section>
    </>
  );
};

export default StoryDetails;
