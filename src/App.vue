<template>
<div class="container-fluid">
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/Directives">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/directives">Directives</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/calendar">Calendar</a>
                </li>
            </ul>
        </div>
    </nav>
 <router-view></router-view>
</div>
</template>
