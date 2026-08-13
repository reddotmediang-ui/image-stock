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
        thumb: 'https://media.gettyimages.com/id/1881051114/video/23-december-2023-lagos-nigeria-pedestrians-moving-in-and-out-of-a-market-area-beside-the-road.jpg?s=640x640&k=20&c=qc0-UFzhsGwCQYru4OXkJjatJwfd4u8rPecCIvNBXUk=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'transportation-2',
        title: 'Transportation 2',
        thumb: 'https://media.gettyimages.com/id/2283180378/video/train-track-and-train-station.mp4?s=mp4-640x640-gi&k=20&c=PlrhPrGiGckrap3fr-MFyc_-GxWTR0p931cOr9s_jww=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'transportation-3',
        title: 'Transportation 3',
        thumb: 'https://media.gettyimages.com/id/2174484931/video/city-life-in-ogun-state-nigeria.jpg?s=640x640&k=20&c=JePdvCqugXlWkyHtKWqO5PNL61I58HuyvDivbuYt978=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'transportation-4',
        title: 'Transportation 4',
        thumb: 'https://media.gettyimages.com/id/1648191861/video/lagos-road-people-and-vehicular-movements.jpg?s=640x640&k=20&c=t6i_vfL2MjfVBI2yU3dF_VZjgYmdeOYrTzxxC7X5aQw=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'transportation-5',
        title: 'Transportation 5',
        thumb: 'https://media.gettyimages.com/id/1582303019/video/ile-epo-road-located-close-to-ile-epo-market-in-agege-lagos-nigeria.jpg?s=640x640&k=20&c=YHF-Zgt9PzyUsP0drBQYzoCvVnfz9A5Vm4sY7QE4SSk=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'transportation-6',
        title: 'Transportation 6',
        thumb: 'https://media.gettyimages.com/id/2180907574/video/aerial-perspective-of-growth-and-development.jpg?s=640x640&k=20&c=Ng82YSWnwxXsUU8SlCVjrsKgAu8oAJXc89a6RQYte3U=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'transportation-7',
        title: 'Transportation 7',
        thumb: 'https://media.gettyimages.com/id/2178265851/video/aerial-view-of-ekiti.jpg?s=640x640&k=20&c=aXJcT0bVfSI8M1A3GG29jf2KKvVZIFzZryFIUiicjoI=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'transportation-8',
        title: 'Transportation 8',
        thumb: 'https://media.gettyimages.com/id/2162913079/video/urban-life-in-lagos.jpg?s=640x640&k=20&c=p5rNZmcBX889Yp3vGPyoYDyvnC4xKMBIiHMlTlRAJJ4=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'transportation-9',
        title: 'Transportation 9',
        thumb: 'https://media.gettyimages.com/id/1648104736/video/lagos-people-and-vehicular-movements.jpg?s=640x640&k=20&c=nlMzo0A4EluTBmMX5Y27BMTuRIedBMfrlhIMOoq2HsA=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'transportation-10',
        title: 'Transportation 10',
        thumb: 'https://media.gettyimages.com/id/1582262127/video/agege-area-in-lagos-nigeria.jpg?s=640x640&k=20&c=hgEtROSW90PWkftSvAfgpjGJylAG_luCAyEIRHoRjjY=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'transportation-11',
        title: 'Transportation 11',
        thumb: 'https://media.gettyimages.com/id/2165446410/video/crowd-at-a-fuel-station.jpg?s=640x640&k=20&c=i7FnUfaDb5a_iNTUpk9fLhLZsuzDZegNMRNTGlD8OuI=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'transportation-12',
        title: 'Transportation 12',
        thumb: 'https://media.gettyimages.com/id/1881047005/video/23-december-2023-lagos-nigeria-pedestrians-moving-in-and-out-of-a-market-area-beside-the-road.jpg?s=640x640&k=20&c=qs7mymbIhnS6Dp1WrZzonVXR--S_BiXC3Xa8ITuilxI=',
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
        thumb: 'https://media.gettyimages.com/id/2189325716/video/christmas-shopping-rush-in-lagos.jpg?s=640x640&k=20&c=sxYuuUIyLT4xfSWfO2Wyvq8cS5sl3ThMQppu35RJr5o=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'market-2',
        title: 'Market 2',
        thumb: 'https://media.gettyimages.com/id/2188890182/video/open-market-environment-in-lagos.jpg?s=640x640&k=20&c=GA9CHjmJftXHIrNHiK41Q9JH6ZOoitjFX0KMH36fd-c=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'market-3',
        title: 'Market 3',
        thumb: 'https://media.gettyimages.com/id/1582297922/video/ile-epo-road-located-close-to-ile-epo-market-in-agege-lagos-nigeria.jpg?s=640x640&k=20&c=F4IMeumO5Vz_xH2fXgTtjWyVonsDfMEr2STqwAllefE=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'market-4',
        title: 'Market 4',
        thumb: 'https://media.gettyimages.com/id/1648305956/video/aerial-view-of-alagbole-market-in-ogun.jpg?s=640x640&k=20&c=TCVEwGtvkjzJeFTGQpZJf_xwdTtegojuqCthogAqwJ8=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'market-5',
        title: 'Market 5',
        thumb: 'https://media.gettyimages.com/id/1648305956/video/aerial-view-of-alagbole-market-in-ogun.jpg?s=640x640&k=20&c=TCVEwGtvkjzJeFTGQpZJf_xwdTtegojuqCthogAqwJ8=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'market-6',
        title: 'Market 6',
        thumb: 'https://media.gettyimages.com/id/1881044443/video/23-december-2023-lagos-nigeria-pedestrians-moving-inside-a-market.jpg?s=640x640&k=20&c=qC9ET4Q7QgXqpvIziaKv2ZHz084Z8ZV4Bc75MANHyAU=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'market-7',
        title: 'Market 7',
        thumb: 'https://media.gettyimages.com/id/1881040354/video/23-december-2023-lagos-nigeria-item-display-market-traders-and-customer-in-abuelegba-lagos.jpg?s=640x640&k=20&c=iKGO1df597GLPnmIaPnKRgcCaQqGBRdVtgmnP3yhbsI=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'market-8',
        title: 'Market 8',
        thumb: 'https://media.gettyimages.com/id/1387605497/video/market-place.mp4?s=mp4-640x640-gi&k=20&c=TfjDdlW_oqlh1kW34YJE9n4h0zBP72z0BEl7ZGFSqZw=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'market-9',
        title: 'Market 9',
        thumb: 'https://media.gettyimages.com/id/2175300462/video/market-environment-in-lagos.mp4?s=mp4-640x640-gi&k=20&c=aqqITY9AC5rjOkL_TSISFpVxJ_mzZxj7suN-7oPGoEM=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'market-10',
        title: 'Market 10',
        thumb: 'https://media.gettyimages.com/id/2191599191/video/daily-life-routines-at-market-environment.mp4?s=mp4-640x640-gi&k=20&c=y-97aCBce9btTrOnaKRUk0LVDzEPrgcJaruy-CQXsm8=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'market-11',
        title: 'Market 11',
        thumb: 'https://media.gettyimages.com/id/2188966613/video/warehouse-market-environment.mp4?s=mp4-640x640-gi&k=20&c=9HE0QmJOIsAl_HO3hsdup-ZKZV3Qwse0h7GQmK5T1yE=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'market-12',
        title: 'Market 12',
        thumb: 'https://media.gettyimages.com/id/2166094575/video/open-market-setting-in-day-light.mp4?s=mp4-640x640-gi&k=20&c=G1_jsfrRWBLL5BMIi5_XoQW0QMXOYFC8JIBHFCf3suk=',
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