// [...]
export class Footer extends PureComponent {
    // [...]
    
    renderCopyrightContent() {
        const { copyright } = this.props;

        return (
            <ContentWrapper
              mix={ { block: 'Footer', elem: 'CopyrightContentWrapper' } }
              wrapperMix={ { block: 'Footer', elem: 'CopyrightContent' } }
              label=""
            >
                <span block="Footer" elem="Copyright">
                    { copyright }
                    { ' Powered by ' }
                    <a href="https://scandipwa.com">
                        ScandiPWA
                    </a>
                </span>
            </ContentWrapper>
        );
    }

    render() {
        return (
            <footer block="Footer" aria-label="Footer">
                { this.renderContent() }
                { this.renderCopyrightContent() }
            </footer>
        );
    }
}

export default Footer;