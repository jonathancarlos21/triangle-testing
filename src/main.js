import { Triangle } from './logic';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';

$(document).ready(function() {
  $("form#sides").submit(function(event) {
    event.preventDefault();
    var newtriangle = new Triangle();

    var side1 = parseInt($("#input1").val());
    var side2 = parseInt($("#input2").val());
    var side3 = parseInt($("#input3").val());

    newtriangle.addSides(side1, side2, side3);
  });
});