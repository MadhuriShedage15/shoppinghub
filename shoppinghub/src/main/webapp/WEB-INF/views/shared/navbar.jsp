<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<c:set var="contextRoot" value="${pageContext.request.contextPath}"/>
</head>
<body>
 <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#">Online shopping</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li id="home">
              <a class="nav-link" href="/shoppinghub/home">Home
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item" id="about">
              <a class="nav-link" href="/shoppinghub/about">About</a>
            
            <li class="nav-item" id="contact">
              <a class="nav-link" href="/shoppinghub/contact">Contact</a>
            </li>
             <li class="nav-item" id="listProducts">
              <a class="nav-link" href="/shoppinghub/show/all/products">View product</a>
            </li>
            <li class="nav-item" id="manageProducts">
            <a class="nav-link" href="${contextRoot}/manage/products">Manage Products</a>
            
            </li>
          </ul>
        </div>
      </div>
    </nav>
</body>
</html>