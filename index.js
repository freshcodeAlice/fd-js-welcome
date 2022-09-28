'use strict'

/*

Написати фунцію-конструктор для сходів (Ladder)
Властивості:
- currentStep

Методи:
- up() - піднятись на одну сходинку
- down() - спуститись на одну сходинку
- showStep() - подивитись, на якій ви зараз сходинці

Методи мають бути в прототипі об'єкта

*/

function Ladder() {
    this.currentStep = 0; 
}

function LadderProto() {
    this.up = function() {
        this.currentStep++;
       return this;
    }

    this.down = function() {
        this.currentStep--;
        return this;
    }

    this.showStep = function () {
        return this.currentStep;
    }
}

const protoObj = new LadderProto();

Ladder.prototype = protoObj;

 const ladder = new Ladder();
 ladder.up().down().down().up().up().showStep(); // 1