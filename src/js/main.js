import React from 'react';

class Main extends React.Component {
    render () {
        return (
            <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                <a class="navbar-brand" href="index.html">Chianne Connelly</a>
                </div>
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li><a href="index.html"><i class="fa fa-home fa-lg"></i> Home</a></li>
                    <li><a href="#bio"><i class="fa fa-user fa-lg"></i> Bio</a></li>
                    <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="fa fa-th-large fa-lg"></i> Projects <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a href="#">beep bop boop</a></li>
                        <li><a href="#">big ole bowl of pasta</a></li>
                        <li><a href="#">itemized. list.</a></li>
                    </ul>
                    </li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#resume"><i class="fa fa-file-text fa-lg"></i> Resume</a></li>
                    <li><a href="#contact"><i class="fa fa-phone fa-lg"></i> Contact</a></li>
                </ul>
                </div>
            </div>
            </nav>
        )
    }
}

export default Main;