import './styles.css'
import Header from "../../components/Header";

import Card from '../../components/Card';
import Comment from '../../components/Comment';
import Footer from '../../components/Footer';

export default function Catalog() {
    return (
        <>
            <Header />
            <main className='ct-catalog-main'>
                <div className='ct-search-bar-container'>
                    <h1>Venha nos visitar</h1>
                </div>
                <div className='ct-catalog-cards-container'>
                    <Card />
                    <Card />
                </div>
                <section className='comment-bg'>
                <div className='ct-search-bar-container '>
                    <h1 className="comment-title">O que estão dizendo </h1>
                    </div>     
                    <Comment/>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                </section>
            </main>
            <Footer/>
        </>
    )
}
