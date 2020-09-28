import React, { Component } from 'react';
import ModalVideo from 'react-modal-video';
import { Link } from "react-router-dom"

export default class VideoTwo extends Component {
    constructor(){
        super()
        this.state = {
            isOpen: false
        }
    }

    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <section className="video-two">
                <div className="container">
                    <img src="/assets/images/scratch-1-1.png" className="video-two__scratch" alt="" />
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="video-two__content">
                                    <h2 className="video-two__title">Queremos conectar a <br />
                                        creativos talentosos  <br />
                                        con negocios asombrosos</h2>
                                </div>
                            </div>
                        </div>
                </div>
            </section>
        );
    }
}