import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../components/layouts/default'
import { Spirit } from '../components/spirit-styles'
import Box from '../components/layouts/partials/box'
import Icon from '../components/global/icon'
import MetaData from '../components/layouts/partials/meta-data'

// import bgapi from '../images/bg-api.svg' // eslint-disable-line no-unused-vars

import GoLogo from '../images/go-logo.png' // eslint-disable-line no-unused-vars

const sectionStyles = {
    container: `grid-12 mt-vw4 mt-vw4-ns`,
    headingContainer: `col-12 col-4-ns mr10-ns`,
    cardContainer: `col-12 col-8-ns mt-vw4 mt0-ns grid-icon-boxes`,
}

class APISection extends React.Component {
    render() {
        const style = (this.props.first === true ? `grid-12` : sectionStyles.container)

        return (
            <div className={ style }>
                { this.props.children }
            </div>
        )
    }
}

APISection.propTypes = {
    first: PropTypes.bool,
}

class Card extends React.Component {
    render() {
        return (
            <Box to={ this.props.to || null } href={ this.props.href } className="br4 flex flex-column justify-between items-center middarkgrey pa2 pt8 pb5 tdn" onWhite="false" elevation={ !this.props.href && !this.props.to ? `1` : `2` }>
                { this.props.icon ? <div className="w10 h10 flex justify-center items-center"><Icon name={ this.props.icon } className={ `w10 h10 mb4 ${this.props.iconClass}` }></Icon></div> : null }
                { this.props.img ? <div className="w10 h10 flex justify-center items-center"><img src={ this.props.img } className="nudge-bottom--4" /></div> : null }
                <span className={ (!this.props.to && !this.props.href ? `o-50` : ``)}>{ this.props.children }</span>
            </Box>
        )
    }
}

Card.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    icon: PropTypes.string,
    img: PropTypes.string,
    className: PropTypes.string,
    iconClass: PropTypes.string,
}

class APIPage extends React.Component {
    render() {
        // TODO: Replace with real title and description for APIPage
        const title = `API Reference`
        const description = `Clients, tools and libraries for working with Ghost`
        const imageUrl = ``

        return (
            <>
                <MetaData
                    data={ this.props.data }
                    location={ this.props.location }
                    type="website"
                    title={ title || this.props.data.site.siteMetadata.title }
                    description={ description || this.props.data.site.siteMetadata.description }
                    image={ imageUrl }
                />
                <Layout title="API" mainClass="bg-whitegrey-l2" bodyClass="bg-white">
                    <section className="bg-api-reference">
                        <div className={ Spirit.page.xl + `tc-ns pt-vw6 pt-vw5-ns pb-vw5 white` }>
                            <h1 className={ Spirit.sectionHeading + `gh-integration-header-shadow`}>API Reference</h1>
                            <p className={ Spirit.sectionSubHeading }>Clients, tools and libraries for working with Ghost</p>
                        </div>
                    </section>

                    <div className={ Spirit.page.l + `pb-vw4 pb-vw3-ns pt-vw4 pt-vw3-ns` }>
                        <APISection first={ true }>
                            <div className={ sectionStyles.headingContainer }>
                                <h2 className={ Spirit.h3 }>Frontend SDKs</h2>
                                <p className={ Spirit.small + `midgrey-l2 mt2` }>Frameworks for working with the Ghost API to build a publication website</p>
                            </div>
                            <div className={ sectionStyles.cardContainer }>
                                <Card to="/api/handlebars-themes/" icon="handlebars-logo" iconClass="stroke-w--1-5">Handlebars</Card>
                                <Card to="/api/gatsby/" icon="gatsby-logo" iconClass="stroke-w--1-5">Gatsby</Card>
                                {/* <Card icon="hugo-logo" className="o-50">Hugo</Card> */}
                            </div>
                        </APISection>

                        <APISection>
                            <div className={ sectionStyles.headingContainer }>
                                <h2 className={ Spirit.h3 }>REST API</h2>
                                <p className={ Spirit.small + `midgrey-l2 mt2` }>A full reference of API Endpoints</p>
                            </div>
                            <div className={ sectionStyles.cardContainer }>
                                <Card to="/api/content/" icon="content-api-logo" iconClass="stroke-w--1-5">Content API</Card>
                                <Card to="/api/admin/" icon="admin-api-logo" iconClass="stroke-w--1-5">Admin API</Card>
                                <Card to="/api/webhooks/" icon="webhooks-logo" iconClass="stroke-w--1-5">Webhooks</Card>
                            </div>
                        </APISection>

                        <APISection>
                            <div className={ sectionStyles.headingContainer }>
                                <h2 className={ Spirit.h3 }>Tools</h2>
                                <p className={ Spirit.small + `midgrey-l2 mt2` }>Utilities to help build and manage Ghost</p>
                            </div>
                            <div className={ sectionStyles.cardContainer }>
                                <Card to="/api/ghost-cli/" icon="ghost-cli-logo" iconClass="stroke-w--1-5">Ghost-CLI</Card>
                                <Card to="/api/migration/" icon="migration-logo" iconClass="stroke-w--1-5">Migration</Card>
                                <Card href="https://gscan.ghost.org" icon="gscan-logo" iconClass="stroke-w--1-5">GScan</Card>
                            </div>
                        </APISection>

                        <APISection>
                            <div className={ sectionStyles.headingContainer }>
                                <h2 className={ Spirit.h3 + `mt2`}>Client Libraries</h2>
                                <p className={ Spirit.small + `midgrey-l2 mt2` }>Specific libraries for interacting with the Ghost API directly</p>
                                <h4 className="f-supersmall dib ma0 pa0 bg-green pa1 br-pill pl3 pr3 tc white mt2 nudge-top--2">Coming soon</h4>
                            </div>
                            <div className={ sectionStyles.cardContainer }>
                                <Card icon="javascript-logo" iconClass="stroke-w--1-5 stroke-midlightgrey o-30">JavaScript</Card>
                                <Card icon="ruby-logo" iconClass="stroke-w--1-5 stroke-midlightgrey o-30">Ruby</Card>
                                <Card icon="php-logo" iconClass="stroke-w--1-5 stroke-midlightgrey o-30">PHP</Card>
                                <Card icon="python-logo" iconClass="stroke-w--1-5 stroke-midlightgrey o-30">Python</Card>
                                {/* <Card to="/" img={ GoLogo }>Go</Card> */ }
                                <Card icon="apple-logo" iconClass="stroke-w--1-5 stroke-midlightgrey o-30">iOS</Card>
                                <Card icon="android-logo" iconClass="stroke-w--1-5 stroke-midlightgrey o-30">Android</Card>
                            </div>
                        </APISection>
                    </div>
                </Layout>
            </>
        )
    }
}

APIPage.propTypes = {
    data: PropTypes.shape({
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                siteUrl: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
}

export default APIPage

export const pageQuery = graphql`
    query {
        site {
            ...SiteMetaFields
        }
    }
`
