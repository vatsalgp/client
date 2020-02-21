import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Modal from "../Modal";
import history from "../../history";
import { fetchStream, deleteStream } from "../../Actions";

class StreamDelete extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    renderActions() {
        return (
            <div>
                <button
                    className="ui button negative"
                    onClick={() => this.props.deleteStream(this.props.match.params.id)}//
                >Delete</button>

                <Link to="/" className="ui button">Cancel</Link>
            </div>
        );
    }

    renderContent() {
        if (!this.props.stream) {
            return "Are you sure you want to delete this stream ?";
        } else {
            return "Are you sure you want to delete the stream with title: " + this.props.stream.title + " ?";
        }
    }

    render() {
        if (!this.props.stream) {
            return <div>Loading...</div>;
        } else {
            return (
                < Modal
                    title="Delete Stream"
                    content={this.renderContent()}
                    actions={this.renderActions()}
                    onDismiss={() => history.push("/")}
                />
            );
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);