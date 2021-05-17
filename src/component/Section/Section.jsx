import React, {Component} from 'react';

import {Typography} from 'antd';
import section from './Section.module.css'


const {Title, Paragraph} = Typography;

class Section extends Component {
    render() {
        const {title, description} = this.props
        return (
            <section className={section.container}>
                <div className={section.blank}/>
                <Title level={1}>{title}</Title>
                <p className={section.description}>{description}</p>
                <div className={section.banner}>
                    {this.props.children}
                </div>
            </section>
        );
    }
}

export default Section;