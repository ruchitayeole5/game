
@extends('layouts.app')

@section('content')

    <div class="game-container" >
        <audio class="forest" autoplay loop>
            <source src="../../audio/rainforest.mp3"></source>
            Your browser isn't invited for super fun audio time.
        </audio>
        <audio class="gun">
            <source src="../../audio/shotgun_reload.mp3"></source>
            Your browser isn't invited for super fun audio time.
        </audio>
            <div id="forest">
                <div id="tree">
                    <img src="../../images/tree.png" alt="">
                </div>
                <div id="tiger" class="animal">
                    <img src="../../images/tiger.gif" alt="">
                </div>
                <div id="squirrel" class="animal">
                    <img src="../../images/squirrel.gif" alt="">
                </div>
                <div id="horse" class="animal" >
                    <img src="../../images/horse.gif" alt="">
                </div>
                <div id="bird" class="animal">
                    <img src="../../images/bird.gif" alt="">
                </div>
                <div id="eagle" class="animal">
                    <img src="../../images/eagle.gif" alt="">
                </div>
                <div id="target">
                    <img src="../../images/target.gif" alt="">
                </div>
                <div class="text">
                    <p id="score">Score:0</p>
                    <p id="timer">Timer:25</p>
                </div>

            </div>
        <div id="dashboard">
            <h1>Game Over</h1>
            <p id="value"></p>
        </div>

    </div>
@endsection

@section('scripts')
    <script src="{{ asset('js/game.js') }}" ></script>
@endsection


