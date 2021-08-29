import { SliderStyles, Image } from './styles'

const images = [
  {
    name: 'Image 1',
    url:
      'https://cdn.pixabay.com/photo/2015/05/15/14/38/computer-768608_960_720.jpg?__cf_chl_jschl_tk__=b638888219f34d6fb6e38efec79cbd06e6537148-1615843831-0-AWw1hqnmBmaPZWhcsFSXXygqVR53repPJ9yjYCX37aNDuQHN_SQphruFUvJggdvAau3_bphwFx67T-QW4y5klhPZgNONpSWJQkWKtRoObUxJJhxzq71ecDMK3fq-Lp_0JzTXflZj6MoPa4chximR9xwLYa14BdQZVGZRlwlN7lVtpShobI6onoMvk4-c5tExryz5Lo_5HChwIvTwnNTa0vj4odTILZWpQmcECGf6KV6YEO7FaMl_z0WLDYRynCh3Bj1048SjI5X4oV4rCenJFSR79nrEH-INf4XYNhCmdRpoc7H_glJHPvxrXy3p_tLgvY5BNirfTDeBhjhn9N-f2jt2G3r3kfV1R9e8cZxoVkEbiImlTcwz5bfp2_u75tFI5PwyGmtE7CHQrvbWW8e-U2I',
  },

  {
    name: 'Image 2',
    url:
      'https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_960_720.jpg',
  },

  {
    name: 'Image 3',
    url:
      'https://cdn.pixabay.com/photo/2015/03/26/09/40/keyboard-690066_960_720.jpg',
  },

  {
    name: 'Image 4',
    url:
      'https://cdn.pixabay.com/photo/2016/03/09/09/17/computer-1245714_960_720.jpg',
  },
]

const Carousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    variableWidth: false,
    className: 'slides',
  }
  return (
    <SliderStyles {...settings}>
      {images.map((image, index) => {
        return (
          <div key={index}>
            <Image src={image.url} alt="Images" />
          </div>
        )
      })}
    </SliderStyles>
  )
}

export default Carousel
