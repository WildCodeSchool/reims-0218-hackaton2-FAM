import React, { Component } from 'react'
import { Container } from 'reactstrap'

class Accueil extends Component {

    constructor() {
        super()
        //state initial
        this.state = {
            articles: [
                {
                    name:"Zidane",
                    price:"45",
                    imgSrc:"https://www.foot01.com/img/images/650x600/2018/Jan/20/benzema-revient-zidane-recupere-l-arme-fatale-du-real-zidane-16,207169.jpg"
                },
                {
                    name:"Leboeuf",
                    price:"45",
                    imgSrc:"https://www.foot01.com/img/images/650x600/2018/Jan/20/benzema-revient-zidane-recupere-l-arme-fatale-du-real-zidane-16,207169.jpg"
                },
                {
                    name:"Pires",
                    price:"45",
                    imgSrc:"https://www.foot01.com/img/images/650x600/2018/Jan/20/benzema-revient-zidane-recupere-l-arme-fatale-du-real-zidane-16,207169.jpg"
                },
                {
                    name:"Karembeu",
                    price:"45",
                    imgSrc:"https://www.foot01.com/img/images/650x600/2018/Jan/20/benzema-revient-zidane-recupere-l-arme-fatale-du-real-zidane-16,207169.jpg"
                }
              ]
        }
    }

    render() {
        return <Container>
            <ListArticle articles={this.state.articles}/>
            <Button />
        </Container>
    }
}

export default Accueil