import { jsPDF } from 'jspdf'

const doc = new jsPDF('p', 'px')

const downloadPdf = (filename: string, htmlElement = document.body) => {
    return new Promise((resolve, reject) => {
        try {
            doc.html(htmlElement, {
                callback(doc) {
                    doc.save(filename)
                    resolve('done')
                },
                x: 20,
                y: 25,
                width: 400,
                windowWidth: 650,
                autoPaging: 'text',
                margin: 5,
            })
        } catch (error) {
            reject(error)
        }
    })
}

export { downloadPdf }
