import React, { Component } from 'react';
import PropTypes from 'prop-types';
import I18n from 'react-native-i18n';
import { connect } from 'react-redux';
import { Text } from 'react-native';


class GlobalLoc extends Component {
    shouldComponentUpdate({ locKey, version, locale }) {
        return this.props.locKey != locKey ||
            this.props.version != version ||
            this.props.locale !== locale;
    }

    render() {
        const { locKey, customizer, style, ...props } = this.props
        return <Text style={ style || {} }>{customizer(I18n.t(locKey, props))}</Text>
    }
}

GlobalLoc.defaultProps = {
    customizer: text => text,
};

GlobalLoc.propTypes = {
    customizer: PropTypes.func,
    locKey: PropTypes.any.isRequired,
};


const mapStateToProps = ({ i18n }) => ({
    locale: i18n.locale,
    version: i18n.version,
});

export default connect(mapStateToProps)(GlobalLoc);
