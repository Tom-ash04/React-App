import React from 'react';
import Lightbox from 'react-images';
import Image from './Image';
import * as images from '../data/Images';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lightboxIsOpen: false, imageIndex: 0 };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  openLightbox(index) {
    this.setState({ lightboxIsOpen: true, imageIndex: index });
  }

  render() {
    return (
      <div className="gallery_content">
        <div className="gallery_gallery">
          <Image src={images.img1} index={0} openLightbox={() => this.openLightbox(0)} />
          <Image src={images.img2} index={1} openLightbox={() => this.openLightbox(1)} />
          <Image src={images.img3} index={2} openLightbox={() => this.openLightbox(2)} />
          <Image src={images.img4} index={3} openLightbox={() => this.openLightbox(3)} />
          <Image src={images.img5} index={4} openLightbox={() => this.openLightbox(4)} />
          <Image src={images.img6} index={5} openLightbox={() => this.openLightbox(5)} />
          <Image src={images.img7} index={6} openLightbox={() => this.openLightbox(6)} />
          <Image src={images.img8} index={7} openLightbox={() => this.openLightbox(7)} />
          <Image src={images.img9} index={8} openLightbox={() => this.openLightbox(8)} />
          <Image src={images.img10} index={9} openLightbox={() => this.openLightbox(9)} />
          <Image src={images.img11} index={10} openLightbox={() => this.openLightbox(10)} />
          <Image src={images.img12} index={11} openLightbox={() => this.openLightbox(11)} />
          <Image src={images.img13} index={12} openLightbox={() => this.openLightbox(12)} />
          <Image src={images.img14} index={13} openLightbox={() => this.openLightbox(13)} />
          <Image src={images.img15} index={14} openLightbox={() => this.openLightbox(14)} />
          <Image src={images.img16} index={15} openLightbox={() => this.openLightbox(15)} />
          <Image src={images.img17} index={16} openLightbox={() => this.openLightbox(16)} />
          <Image src={images.img18} index={17} openLightbox={() => this.openLightbox(17)} />
          <Image src={images.img19} index={18} openLightbox={() => this.openLightbox(18)} />
          <Image src={images.img20} index={19} openLightbox={() => this.openLightbox(19)} />
          <Image src={images.img21} index={20} openLightbox={() => this.openLightbox(20)} />
          <Image src={images.img22} index={21} openLightbox={() => this.openLightbox(21)} />
          <Image src={images.img23} index={22} openLightbox={() => this.openLightbox(22)} />
          <Image src={images.img24} index={23} openLightbox={() => this.openLightbox(23)} />
          <Image src={images.img25} index={24} openLightbox={() => this.openLightbox(24)} />
          <Image src={images.img26} index={25} openLightbox={() => this.openLightbox(25)} />
          <Image src={images.img27} index={26} openLightbox={() => this.openLightbox(26)} />
          <Image src={images.img28} index={27} openLightbox={() => this.openLightbox(27)} />
          <Image src={images.img29} index={28} openLightbox={() => this.openLightbox(28)} />
          <Image src={images.img30} index={29} openLightbox={() => this.openLightbox(29)} />
          <Image src={images.img31} index={30} openLightbox={() => this.openLightbox(30)} />
          <Image src={images.img32} index={31} openLightbox={() => this.openLightbox(31)} />
          <Image src={images.img33} index={32} openLightbox={() => this.openLightbox(32)} />
          <Image src={images.img34} index={33} openLightbox={() => this.openLightbox(33)} />
          <Image src={images.img35} index={34} openLightbox={() => this.openLightbox(34)} />
          <Image src={images.img36} index={35} openLightbox={() => this.openLightbox(35)} />
          <Image src={images.img37} index={36} openLightbox={() => this.openLightbox(36)} />
          <Image src={images.img38} index={37} openLightbox={() => this.openLightbox(37)} />
          <Image src={images.img39} index={38} openLightbox={() => this.openLightbox(38)} />
          <Image src={images.img40} index={39} openLightbox={() => this.openLightbox(39)} />
          <Image src={images.img41} index={40} openLightbox={() => this.openLightbox(40)} />
          <Image src={images.img42} index={41} openLightbox={() => this.openLightbox(41)} />
          <Image src={images.img43} index={42} openLightbox={() => this.openLightbox(42)} />
          <Image src={images.img44} index={43} openLightbox={() => this.openLightbox(43)} />
          <Image src={images.img45} index={44} openLightbox={() => this.openLightbox(44)} />
          <Image src={images.img46} index={45} openLightbox={() => this.openLightbox(45)} />
          <Image src={images.img47} index={46} openLightbox={() => this.openLightbox(46)} />
          <Image src={images.img48} index={47} openLightbox={() => this.openLightbox(47)} />
          <Image src={images.img49} index={48} openLightbox={() => this.openLightbox(48)} />
          <Image src={images.img50} index={49} openLightbox={() => this.openLightbox(49)} />
        </div>
        <Lightbox
          backdropClosesModal={true}
          currentImage={this.state.imageIndex}
          images={[
            { src: images.img1 },
            { src: images.img2 },
            { src: images.img3 },
            { src: images.img4 },
            { src: images.img5 },
            { src: images.img6 },
            { src: images.img7 },
            { src: images.img8 },
            { src: images.img9 },
            { src: images.img10 },
            { src: images.img11 },
            { src: images.img12 },
            { src: images.img13 },
            { src: images.img14 },
            { src: images.img15 },
            { src: images.img16 },
            { src: images.img17 },
            { src: images.img18 },
            { src: images.img19 },
            { src: images.img20 },
            { src: images.img21 },
            { src: images.img22 },
            { src: images.img23 },
            { src: images.img24 },
            { src: images.img25 },
            { src: images.img26 },
            { src: images.img27 },
            { src: images.img28 },
            { src: images.img29 },
            { src: images.img30 },
            { src: images.img31 },
            { src: images.img32 },
            { src: images.img33 },
            { src: images.img34 },
            { src: images.img35 },
            { src: images.img36 },
            { src: images.img37 },
            { src: images.img38 },
            { src: images.img39 },
            { src: images.img40 },
            { src: images.img41 },
            { src: images.img42 },
            { src: images.img43 },
            { src: images.img44 },
            { src: images.img45 },
            { src: images.img46 },
            { src: images.img47 },
            { src: images.img48 },
            { src: images.img49 },
            { src: images.img50 },
          ]}
          isOpen={this.state.lightboxIsOpen}
          onClickPrev={() => this.setState({ imageIndex: this.state.imageIndex - 1 })}
          onClickNext={() => this.setState({ imageIndex: this.state.imageIndex + 1 })}
          onClose={() => this.setState({ lightboxIsOpen: false })}
        />
      </div>
    );
  }
}

export default Gallery;

