import { Inject, Service } from 'typedi';
import { ISettingsInput, ISettings } from '../interfaces/ISettings';
import { Container } from 'winston';
import countryCode from './countryCode';

@Service()
export default class SettingsService {

    constructor(
        @Inject('settingsModel') private settingsModel: Models.SettingsModel,
        @Inject('logger') private logger: any,
    ) { }

    public async getSettings(search: any): Promise<{ settings: any }> {

        try {
            this.logger.silly('Get Settingss');
            const settings = await this.settingsModel.findOne({}, { __v: 0 })

            return { settings };

        } catch (e) {

            this.logger.error(e);
            throw e;
        }
    }

    public async updateSettings(settingsInput: ISettingsInput): Promise<{ settings: any }> {

        try {
            this.logger.silly('update Single Settings');

            const settings = await this.settingsModel.findOneAndUpdate({}, { $set: settingsInput }, { new: true, upsert: true })

            return { settings };

        } catch (e) {

            this.logger.error(e);
            throw e;
        }
    }



    public async getCountryCode(): Promise<any> {



        try {
            this.logger.silly('update Single Settings');

            const code = await countryCode.fetchCountryCode()

            return { code };

        } catch (e) {

            this.logger.error(e);
            throw e;
        }
    }

}