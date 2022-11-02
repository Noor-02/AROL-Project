import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import classes from "./ApplyPage.module.css"


class PreviewPage extends Component {
    render() {
        return (
            <div>
                <Modal
                    show={this.props.show}
                    onHide={() => this.props.showSet(false)}
                    dialogClassName="modal-xl"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title>
                            FINAL APPLICATION
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default PreviewPage;