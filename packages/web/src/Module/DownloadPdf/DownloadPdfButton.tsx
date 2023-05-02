import * as React from 'react'

import { Download } from '../Icon/Download/Download'

import { downloadPdf } from './DownloadPdf'
import * as styles from './DownloadPdfButton.scss'

interface DownloadPdfButtonProps {
    filename: string
}

const DownloadPdfButton: React.FC<DownloadPdfButtonProps> = (props) => {
    const [isInProgress, setIsInProgress] = React.useState(false)
    if (isInProgress) {
        return null
    }

    const onClick = async () => {
        setIsInProgress(true)
        await downloadPdf(props.filename)
        setIsInProgress(false)
    }

    return (
        <button onClick={onClick} className={styles.button}>
            <Download />
            <span>Download CV</span>
        </button>
    )
}

export { DownloadPdfButton }
