import Head from 'next/head';
import Layout from '@/components/Layout';
import Breadcrumb from '@/components/Breadcrumb';
import CategoryGallery from '@/components/CategoryGallery';
import { videoCategories, getVideoCategory } from '@/data/categories';

export default function VideoCategory({ category, videos }) {
  const pageTitle = `${category.title} Stock Videos | African Photos and Videos`;
  const pageDescription = `Browse our collection of ${category.title.toLowerCase()} stock videos. High-quality footage available on Getty Images, Shutterstock, Adobe Stock, and Pond5.`;

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Videos', url: '/videos' },
    { name: category.title, url: `/videos/${category.slug}` }
  ];

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://www.africanphotosandvideos.com.ng/videos/${category.slug}`} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            'name': category.title,
            'description': pageDescription,
            'url': `https://www.africanphotosandvideos.com.ng/videos/${category.slug}`,
            'breadcrumb': {
              '@type': 'BreadcrumbList',
              'itemListElement': breadcrumbs.map((item, index) => ({
                '@type': 'ListItem',
                'position': index + 1,
                'name': item.name,
                'item': `https://www.africanphotosandvideos.com.ng${item.url}`
              }))
            }
          })}
        </script>
      </Head>
      <Layout>
        <Breadcrumb items={breadcrumbs} />
        <CategoryGallery category={category} videos={videos} isVideo />
      </Layout>
    </>
  );
}

export async function getStaticProps({ params }) {
  const category = getVideoCategory(params.category);

  if (!category) {
    return { notFound: true };
  }

  // ============================================================
  // VIDEO GALLERY DATA
  // 8 categories × 12 video cards = 96 video cards
  //
  // Replace:
  // thumb: 'insert image link'
  //
  // with your actual thumbnail URL.
  //
  // Replace:
  // url: '#'
  //
  // with the actual Getty Images, Shutterstock,
  // Adobe Stock or Pond5 video URL when ready.
  // ============================================================

  const categoryVideos = {

    // ==========================================================
    // LIFESTYLE
    // ==========================================================

    lifestyle: [
      {
        id: 'lifestyle-1',
        title: 'Lifestyle 1',
        thumb: 'https://media.gettyimages.com/id/1425841841/video/lagos-island-street.jpg?s=640x640&k=20&c=cDwtwla0cPLMGePBivM1leej2aC-f8nKEAAM1CpQ7OE=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'lifestyle-2',
        title: 'Lifestyle 2',
        thumb: 'https://media.gettyimages.com/id/1425846874/video/lagos-island-street.jpg?s=640x640&k=20&c=noOsKnr-gqtjhRLSXmdQ0r7ENnFIHMvtsOGL5I9nSy0=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'lifestyle-3',
        title: 'Lifestyle 3',
        thumb: 'https://media.gettyimages.com/id/1708868246/video/19-august-2023-lagos-nigera-hausa-man-having-breakfast-at-morning-among-a-group-of-people-in.jpg?s=640x640&k=20&c=Fftx66od3tniq0ewNSgaVOH6WJ28KJCtKxH3XcJei5M=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'lifestyle-4',
        title: 'Lifestyle 4',
        thumb: 'https://media.gettyimages.com/id/1361609771/video/palm-oil-extraction-from-a-local-processing-business-in-iju-itaogbolu-akure-north-of-ondo.jpg?s=640x640&k=20&c=W0t80v_vNB-i7ToQE4aDFzKw7MCUx22i6uKGy9ALQV4=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'lifestyle-5',
        title: 'Lifestyle 5',
        thumb: 'https://media.gettyimages.com/id/1387621932/video/market-place-in-nigeria.jpg?s=640x640&k=20&c=qCDGrJfI-rhteEDuAb2vdeaoCl_gQNvi1v9bJnke9c4=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'lifestyle-6',
        title: 'Lifestyle 6',
        thumb: 'https://media.gettyimages.com/id/2222371847/video/annual-colourful-ancient-festival.jpg?s=640x640&k=20&c=Kg_20LluQN1pSKGPwHKlsI1dVbrC3wCZxSBYppB7YEk=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'lifestyle-7',
        title: 'lifestyle 7',
        thumb: 'https://media.gettyimages.com/id/2289570762/video/slow-mo-cinematic-moments-of-a-young-lady-jumping-and-dancing-on-a-beach.jpg?s=640x640&k=20&c=MxxabW5VbtOS_TKBYr_Qhu-dc2m7Q8kBhBLUrWm6DJE=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'lifestyle-8',
        title: 'Lifestyle 8',
        thumb: 'https://media.gettyimages.com/id/1648056273/video/people-using-an-atm-outdoor.jpg?s=640x640&k=20&c=vpF-1DBAAwtZnKaZwH6DDiV2lPpURpz6iAU87AeXdZA=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'lifestyle-9',
        title: 'lifestyle 9',
        thumb: 'https://media.gettyimages.com/id/2265582440/video/fishermen-on-a-canoe.jpg?s=640x640&k=20&c=OWDy8GsqOum4xw3V_MujkH0clstVMkbpkzqb66MSyJ8=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'lifestyle-10',
        title: 'lifestyle 10',
        thumb: 'https://media.gettyimages.com/id/2178959334/video/people-at-a-refuel-station.jpg?s=640x640&k=20&c=4W4a5HP85-CfPPUkX6lGVp9BKnhcy5eJk9ZEealTazM=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'lifestyle-11',
        title: 'lifestyle 11',
        thumb: 'https://media.gettyimages.com/id/2204759872/video/electrical-meters-for-reading-power-consumption.jpg?s=640x640&k=20&c=FiEugy07v9uAgJYLfC8UYVvocdkrv78-pdhPSNMpk8s=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'lifestyle-12',
        title: 'lifestyle 12',
        thumb: 'https://media.gettyimages.com/id/2253744886/video/creative-traditional-festival-called-eyo-in-lagos-nigeria.jpg?s=640x640&k=20&c=KRUY4X9FTpqROFxOFOEXn_pUkw5MuhGf8ofy5rxiPhs=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      }
    ],

    // ==========================================================
    // TRANSPORTATION
    // ==========================================================

    transportation: [
      {
        id: 'transportation-1',
        title: 'Transportation 1',
        thumb: 'https://www.gettyimages.com/detail/video/people-at-a-refuel-station-stock-footage/2178960435?slot=598',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'transportation-2',
        title: 'Transportation 2',
        thumb: 'https://videos.pond5.com/people-and-transportation-ikorodu-footage-249150729_main_xxl.mp4',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'transportation-3',
        title: 'Transportation 3',
        thumb: 'https://videos.pond5.com/bus-station-lagos-nigeria-footage-249149886_main_xxl.mp4',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'transportation-4',
        title: 'Transportation 4',
        thumb: 'https://videos.pond5.com/lagos-roads-and-transportation-nigeria-footage-249168220_main_xxl.mp4',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'transportation-5',
        title: 'Transportation 5',
        thumb: 'https://videos.pond5.com/young-mechanic-boys-working-commercial-footage-249148495_main_xxl.mp4',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'transportation-6',
        title: 'Transportation 6',
        thumb: 'https://videos.pond5.com/traffic-congestion-lagos-roads-footage-249167397_main_xxl.mp4',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'transportation-7',
        title: 'Transportation 7',
        thumb: 'https://videos.pond5.com/traffic-congestion-lagos-roads-footage-249163230_main_xxl.mp4',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'transportation-8',
        title: 'Transportation 8',
        thumb: 'https://videos.pond5.com/life-ogun-state-nigeria-footage-249169946_main_xxl.mp4',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'transportation-9',
        title: 'Transportation 9',
        thumb: 'https://videos.pond5.com/lagos-bus-transportation-bus-stop-footage-249149888_main_xxl.mp4',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'transportation-10',
        title: 'Transportation 10',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'transportation-11',
        title: 'Transportation 11',
        thumb: 'https://videos.pond5.com/traffic-congestion-lagos-roads-footage-249167397_main_xxl.mp4',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'transportation-12',
        title: 'Transportation 12',
        thumb: 'https://videos.pond5.com/lagos-roads-and-transportation-nigeria-footage-249164172_main_xxl.mp4',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      }
    ],

    // ==========================================================
    // MARKET
    // ==========================================================

    market: [
      {
        id: 'market-1',
        title: 'Market 1',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'market-2',
        title: 'Market 2',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'market-3',
        title: 'Market 3',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'market-4',
        title: 'Market 4',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'market-5',
        title: 'Market 5',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'market-6',
        title: 'Market 6',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'market-7',
        title: 'Market 7',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'market-8',
        title: 'Market 8',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'market-9',
        title: 'Market 9',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'market-10',
        title: 'Market 10',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'market-11',
        title: 'Market 11',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'market-12',
        title: 'Market 12',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      }
    ],

    // ==========================================================
    // AERIAL
    // ==========================================================

    aerial: [
      {
        id: 'aerial-1',
        title: 'Aerial 1',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'aerial-2',
        title: 'Aerial 2',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'aerial-3',
        title: 'Aerial 3',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'aerial-4',
        title: 'Aerial 4',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'aerial-5',
        title: 'Aerial 5',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'aerial-6',
        title: 'Aerial 6',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'aerial-7',
        title: 'Aerial 7',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'aerial-8',
        title: 'Aerial 8',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'aerial-9',
        title: 'Aerial 9',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'aerial-10',
        title: 'Aerial 10',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'aerial-11',
        title: 'Aerial 11',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'aerial-12',
        title: 'Aerial 12',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      }
    ],

    // ==========================================================
    // FESTIVAL
    // ==========================================================

    festival: [
      {
        id: 'festival-1',
        title: 'Festival 1',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'festival-2',
        title: 'Festival 2',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'festival-3',
        title: 'Festival 3',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'festival-4',
        title: 'Festival 4',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'festival-5',
        title: 'Festival 5',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'festival-6',
        title: 'Festival 6',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'festival-7',
        title: 'Festival 7',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'festival-8',
        title: 'Festival 8',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'festival-9',
        title: 'Festival 9',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'festival-10',
        title: 'Festival 10',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'festival-11',
        title: 'Festival 11',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'festival-12',
        title: 'Festival 12',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      }
    ],

    // ==========================================================
    // NATURE
    // ==========================================================

    nature: [
      {
        id: 'nature-1',
        title: 'Nature 1',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'nature-2',
        title: 'Nature 2',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'nature-3',
        title: 'Nature 3',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'nature-4',
        title: 'Nature 4',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'nature-5',
        title: 'Nature 5',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'nature-6',
        title: 'Nature 6',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'nature-7',
        title: 'Nature 7',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'nature-8',
        title: 'Nature 8',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'nature-9',
        title: 'Nature 9',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'nature-10',
        title: 'Nature 10',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'nature-11',
        title: 'Nature 11',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'nature-12',
        title: 'Nature 12',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      }
    ],

    // ==========================================================
    // TRAVEL
    // ==========================================================

    travel: [
      {
        id: 'travel-1',
        title: 'Travel 1',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'travel-2',
        title: 'Travel 2',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'travel-3',
        title: 'Travel 3',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'travel-4',
        title: 'Travel 4',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'travel-5',
        title: 'Travel 5',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'travel-6',
        title: 'Travel 6',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'travel-7',
        title: 'Travel 7',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'travel-8',
        title: 'Travel 8',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'travel-9',
        title: 'Travel 9',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'travel-10',
        title: 'Travel 10',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'travel-11',
        title: 'Travel 11',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'travel-12',
        title: 'Travel 12',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      }
    ],

    // ==========================================================
    // LANDMARK
    // ==========================================================

    landmark: [
      {
        id: 'landmark-1',
        title: 'Landmark 1',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'landmark-2',
        title: 'Landmark 2',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'landmark-3',
        title: 'Landmark 3',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'landmark-4',
        title: 'Landmark 4',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'landmark-5',
        title: 'Landmark 5',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'landmark-6',
        title: 'Landmark 6',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'landmark-7',
        title: 'Landmark 7',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'landmark-8',
        title: 'Landmark 8',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'landmark-9',
        title: 'Landmark 9',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'landmark-10',
        title: 'Landmark 10',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'landmark-11',
        title: 'Landmark 11',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'landmark-12',
        title: 'Landmark 12',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      }
    ]
  };

  // Get videos for the current category
  const videos = categoryVideos[category.slug] || [];

  return {
    props: { category, videos },
    revalidate: 3600
  };
}

export async function getStaticPaths() {
  const paths = videoCategories.map((category) => ({
    params: { category: category.slug }
  }));

  return {
    paths,
    fallback: false
  };
}