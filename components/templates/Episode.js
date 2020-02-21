import Header from '../organisms/Header';
import Hero from '../organisms/Hero';
import PostContent from '../organisms/PostContent';
import Footer from '../organisms/Footer';

export default function Episode(props) {

    console.log(props.post)

    return (
        <div>
            <Header t={props.t} settings={props.settings}/>
            <Hero backgroundImage={props.post.feature_image}/>
            <h1>{props.post.title}</h1>
            <PostContent html={props.post.html}/>
            <Footer t={props.t}/>
        </div>
    );
}