import React from 'react'

export default class Error extends React.Component {
    static getInitialProps ({ res, xhr }) {
        const statusCode = res ? res.statusCode : (xhr ? xhr.status : null)
        return { statusCode }
    }

    render () {
        return (
            <p>{
                this.props.statusCode
                    ? `An error ${this.props.statusCode} occurred on server5555`
                    : 'An error occurred on client'
            }</p>
        )
    }
}