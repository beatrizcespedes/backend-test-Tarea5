pipeline {
    agent any
    stages {
        stage('Install Dependencies') {
            steps {
                // Instala dependencias usando npm (para proyectos Node.js)
                sh 'npm install'
                  }
        }
        // Puedes agregar más stages según necesites
    }
    post {
        always {
            // Acciones que se ejecutan después de todas las etapas
            echo 'Pipeline completed.'
        }
        success {
            // Acciones que se ejecutan si todas las etapas se completan con éxito
            echo 'Pipeline succeeded.'
        }
        failure {
            // Acciones que se ejecutan si alguna etapa falla
            echo 'Pipeline failed.'
        }
    }
}
