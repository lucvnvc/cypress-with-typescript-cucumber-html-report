pipeline {
    agent any

    tools {
        nodejs "nodejs"
    }

    stages {
        stage('Load dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('E2E Tests') {
            steps {
                git 'https://github.com/lucvnvc/cypress-with-typescript-cucumber-html-report.git'

                // Run
                sh 'yarn remove-output'
                // sh 'yarn cypress run --browser ${browser} --headless --env tags="not @CheckFailedCase"'
                sh 'yarn cypress run --browser ${browser} --headed --env tags="not @CheckFailedCase"'
            }
        }
        stage('Generate report') {
            steps {
                sh 'yarn generate-report'
                publishHTML target: [
	                allowMissing: false,
	                alwaysLinkToLastBuild: false,
	                keepAll: true,
	                reportDir: './output',
	                reportFiles: 'index.html',
	                reportName: 'HTML Report'
                ]
            }
        }
    }
}
