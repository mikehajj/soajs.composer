"use strict";
var assert = require('assert');
var helper = require("../helper.js");
var shell = require('shelljs');
var sampleData = require("soajs.mongodb.data/modules/composer");

describe("importing sample data", function () {
	var controller;
	
	it("do import", function (done) {
		shell.pushd(sampleData.dir);
		shell.exec("chmod +x " + sampleData.shell, function (code) {
			assert.equal(code, 0);
			shell.exec(sampleData.shell, function (code) {
				assert.equal(code, 0);
				shell.popd();
				done();
			});
		});
	});

	it("starting services for test", function(done){
		controller = require("soajs.controller");
		setTimeout(function () {
			console.log("test the composer");
			require("./composer.test.js");
			done();
		}, 2000);
	});
});

