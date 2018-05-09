#!/usr/bin/env groovy

pipeline {
  agent any 

  environment {
    MY_KEY = "MY_VALUE"
  }

  stages {

    stage('Build') {
      steps {
        script {
          sh '''#!/bin/bash
          whoami
          pwd
          printenv
          ls -al
          ls -lR
          '''
        }
      }
    }
  }
}



