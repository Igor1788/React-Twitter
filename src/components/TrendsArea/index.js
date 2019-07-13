import React, { Component } from 'react'
import './trendsArea.css'
import {Link} from 'react-router-dom'

class TrendsArea extends Component {
    render() {
        return (
            <div className="trendsArea">
                <h2 className="trendsArea__titulo widget__titulo">Trends Brasil</h2>
                <ol className="trendsArea__lista">
                    <li><Link to ="/">#bagulhos</Link></li>
                    <li><Link to ="/">#bagulheiros</Link></li>
                </ol>
            </div>
        )
    }
}

export default TrendsArea