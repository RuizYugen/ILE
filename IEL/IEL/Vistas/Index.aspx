﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Index.aspx.cs" Inherits="IEL.Vistas.Index" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title></title>
    <link rel="stylesheet" href="CSS/bootstrap.min.css"/>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
    <style>
        .head {
            height: 10%;
        }

        .logo {
            width: 50px;
        }
        /* Remove the navbar's default margin-bottom and rounded borders */
        .navbar {
            margin-bottom: 0;
            border-radius: 0;
            height:100px;
        }

        /* Add a gray background color and some padding to the footer */
        footer {
            background-color: #f2f2f2;
            padding: 25px;
        }
    </style>
</head>
<body>
    <nav class="navbar navbar-inverse">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#"><img src="IMG/logo.png" class="logo"/></a>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
                
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="login.aspx">Login</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <div class="jumbotron">
        <div class="container text-center">
            <h1>IEL</h1>
            <p>ITSUR ENGLISH LEARN</p>
        </div>
    </div>

    <div class="container-fluid bg-3 text-center">
        <h3>Some of my Work</h3>
        <br>
        <div class="row">
            <div class="col-sm-3">
                <p>Some text..</p>
                <img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" style="width: 100%" alt="Image">
            </div>
            <div class="col-sm-3">
                <p>Some text..</p>
                <img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" style="width: 100%" alt="Image">
            </div>
            <div class="col-sm-3">
                <p>Some text..</p>
                <img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" style="width: 100%" alt="Image">
            </div>
            <div class="col-sm-3">
                <p>Some text..</p>
                <img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" style="width: 100%" alt="Image">
            </div>
        </div>
    </div>
    <br>

    <div class="container-fluid bg-3 text-center">
        <div class="row">
            <div class="col-sm-3">
                <p>Some text..</p>
                <img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" style="width: 100%" alt="Image">
            </div>
            <div class="col-sm-3">
                <p>Some text..</p>
                <img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" style="width: 100%" alt="Image">
            </div>
            <div class="col-sm-3">
                <p>Some text..</p>
                <img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" style="width: 100%" alt="Image">
            </div>
            <div class="col-sm-3">
                <p>Some text..</p>
                <img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" style="width: 100%" alt="Image">
            </div>
        </div>
    </div>
    <br>
    <br>

    <footer class="container-fluid text-center">
        <p>Footer Text</p>
    </footer>

</body>
</html>