import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import uuidv4 from "uuid";
import { config } from "react-spring";
import { primaryColor } from "../static/colors";
import ProjectContentBlocComponent from './ProjectContentBlocComponent';
import Grid from "@material-ui/core/Grid";
import Icon from '../Icon'

export default class Example extends Component {

  constructor(props){
    super(props)

    this.state = {  goToSlide: 0,
                    offsetRadius: 10,
                    showNavigation: false,
                    config: config.slow }

    // Binding this keyword
    this.handleClickBack = this.handleClickBack.bind(this)
    this.handleClickNext = this.handleClickNext.bind(this)
  }

  projects = [{type: 'Side project', name: 'Boursonmic', period: '02/2020 - Present', description: 'Boursonomic project will allow each user to track their investments: the user will have the possibility to see the performance of their funds, how much money they gained or lost and even follow the news related to topics they\'re interested in.', techno: ['React.js', 'CSS', 'JavaScript', 'Python', 'flask', 'MongoDB', 'InfluxDB', 'Docker']},
              {type: 'Academic project', name: 'CFA Bot', period: '11/2017 - 06/2018', description: 'Built a bot that can answer the Chartered Financial Analyst quiz (CFA):\n• Document retrieval: finding the relevant source of information\n• Document reader: identifying the answer spans from those documents (Natural Language Processing)\n• Choice selector: select the correct answer from the all the choices', techno: ['Python', 'scikit-learn', 'spaCy']},
              {type: 'Academic project', name: 'Recycle Bin', period: '10/2015 - 04/2016', description: '“Recycle Bin” project is a smart bin, controlled by a Raspberry Pi, that recognizes the type of trash and sorts them in their corresponding container using Machine Learning, in addition to sending information on the cloud (Azure) about its content and displaying them in a beautiful responsive web application.', techno: ['Java', 'Azure', 'JavaScript', 'html', 'CSS']}]

  slides = this.projects.map((project, index) => ({key: uuidv4(),
                                            content: <ProjectContentBlocComponent type={project.type} name={project.name} period={project.period} techno={project.techno} description={project.description}/>}))



  handleClickBack(){
    this.setState({goToSlide : this.state.goToSlide - 1})
  }

  handleClickNext(){
    this.setState({goToSlide : this.state.goToSlide + 1})
  }

  render() {
    return (
      <div style={{ width: "80%", height: "500px", margin: "0 auto", position: "relative", display: "flex", justifyContent: "center" }}>
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
        />

        <Grid container className='arrows' direction="row" style={{ width: "calc(40vw + 10px)", minWidth: "326px", height: "500px", margin: "0 auto", position: "absolute", display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: "2" }}>
          {
            this.state.goToSlide === 0 ?
            <Icon name="arrow-left" color={primaryColor} size={0} onClick={this.handleClickBack}/>
            :
            <Icon name="arrow-left" color={primaryColor} size={25} onClick={this.handleClickBack}/>
          }
          {
            this.state.goToSlide < this.projects.length - 1 ?
            <Icon name="arrow-right" color={primaryColor} size={25} onClick={this.handleClickNext} />
            :
            <Icon name="arrow-right" color={primaryColor} size={0} onClick={this.handleClickNext} />
          }
        </Grid>

      </div>
    );
  }
}
