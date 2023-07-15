import {faO, faXmark} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {clsx} from 'clsx';
import React, {useRef} from 'react';
import {CSSTransition} from 'react-transition-group';
import './style.scss';

function Mark({turn}) {
    const nodeRef = useRef(null);
    const classes = clsx('mark', turn && `mark--${turn}`);
    const icon = turn === 'x' ? faXmark : faO;

    return (
        <CSSTransition nodeRef={nodeRef} in={turn} appear={true} unmountOnExit classNames={'mark-'}
                       timeout={500}>
            <FontAwesomeIcon ref={nodeRef} className={classes} icon={icon}/>
        </CSSTransition>
    );
}

export default Mark;