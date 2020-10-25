import { Inject, Service } from 'typedi';
// import { IIndividualInput, IIndividual } from '../interfaces/IIndividual';
import { Types } from 'mongoose';


@Service()
export default class FormService {

    constructor(
        @Inject('IndividualFormModel') private IndividualFormModel: Models.IndividualFormModel,
        @Inject('SchoolFormModel') private SchoolFormModel: Models.SchoolFormModel,
        @Inject('CorporateFormModel') private CorporateFormModel: Models.CorporateFormModel,
        @Inject('logger') private logger: any,
    ) { }

    public async addIndividualForm(individualInput: any): Promise<{ individual: any }> {

        try {
            this.logger.silly('Creating individual db record');

            const individualData = new this.IndividualFormModel(individualInput)

            const individualRecord = await individualData.save()

            const individual = individualRecord.toObject();
            Reflect.deleteProperty(individual, '__v');

            return { individual };

        } catch (e) {

            this.logger.error(e);
            throw e;
        }
    }

    public async getIndividualWithPagination(search: any, limit: number, skip: number): Promise<{ individuals: any }> {

        try {
            this.logger.silly('Get Individuals with Pagination');

            const individuals = await this.IndividualFormModel.find(search, { __v: 0 }).sort({ createdAt: -1 }).skip(skip).limit(limit)

            return { individuals };

        } catch (e) {

            this.logger.error(e);
            throw e;
        }
    }



    public async countIndividuals(search: any): Promise<{ count: any }> {

        try {
            this.logger.silly('Count query');

            const count = await this.IndividualFormModel.countDocuments(search)

            return { count };

        } catch (e) {

            this.logger.error(e);
            throw e;
        }
    }

    public async getIndividuals(search: any): Promise<{ individuals: any }> {

        try {
            this.logger.silly('Get Individuals');

            const individuals = await this.IndividualFormModel.find(search, { __v: 0 }).sort({ createdAt: -1 })

            return { individuals };

        } catch (e) {

            this.logger.error(e);
            throw e;
        }
    }

    public async deleteIndividual(Ids: any): Promise<{ deleteData: any }> {

        try {
            this.logger.silly('Deleting Individual');

            const deleteData = await this.IndividualFormModel.updateMany({ _id: Ids.map((res: any) => Types.ObjectId(res)), isDeleted: false }, { isDeleted: true })

            return { deleteData };

        } catch (e) {

            this.logger.error(e);
            throw e;
        }
    }


    // School Form . .. .


    public async addSchoolForm(schoolInput: any): Promise<{ school: any }> {

        try {
            this.logger.silly('Creating school db record');

            const schoolData = new this.SchoolFormModel(schoolInput)

            const schoolRecord = await schoolData.save()

            const school = schoolRecord.toObject();
            Reflect.deleteProperty(school, '__v');

            return { school };

        } catch (e) {

            this.logger.error(e);
            throw e;
        }
    }

    public async getSchoolWithPagination(search: any, limit: number, skip: number): Promise<{ schools: any }> {

        try {
            this.logger.silly('Get Schools with Pagination');

            const schools = await this.SchoolFormModel.find(search, { __v: 0 }).sort({ createdAt: -1 }).skip(skip).limit(limit)

            return { schools };

        } catch (e) {

            this.logger.error(e);
            throw e;
        }
    }



    public async countSchools(search: any): Promise<{ count: any }> {

        try {
            this.logger.silly('Count query');

            const count = await this.SchoolFormModel.countDocuments(search)

            return { count };

        } catch (e) {

            this.logger.error(e);
            throw e;
        }
    }

    public async getSchools(search: any): Promise<{ schools: any }> {

        try {
            this.logger.silly('Get Schools');

            const schools = await this.SchoolFormModel.find(search, { __v: 0 }).sort({ createdAt: -1 })
            return { schools };

        } catch (e) {

            this.logger.error(e);
            throw e;
        }
    }

    public async deleteSchool(Ids: any): Promise<{ deleteData: any }> {

        try {
            this.logger.silly('Deleting School');

            const deleteData = await this.SchoolFormModel.updateMany({ _id: Ids.map((res: any) => Types.ObjectId(res)), isDeleted: false }, { isDeleted: true })

            return { deleteData };

        } catch (e) {

            this.logger.error(e);
            throw e;
        }
    }


    // Corporate Form . . .

    public async addCorporateForm(CorporateInput: any): Promise<{ Corporate: any }> {

        try {
            this.logger.silly('Creating Corporate db record');

            const CorporateData = new this.CorporateFormModel(CorporateInput)

            const CorporateRecord = await CorporateData.save()

            const Corporate = CorporateRecord.toObject();
            Reflect.deleteProperty(Corporate, '__v');

            return { Corporate };

        } catch (e) {

            this.logger.error(e);
            throw e;
        }
    }

    public async getCorporateWithPagination(search: any, limit: number, skip: number): Promise<{ corporates: any }> {

        try {
            this.logger.silly('Get Corporates with Pagination');

            const corporates = await this.CorporateFormModel.find(search, { __v: 0 }).sort({ createdAt: -1 }).skip(skip).limit(limit)

            return { corporates };

        } catch (e) {

            this.logger.error(e);
            throw e;
        }
    }



    public async countCorporates(search: any): Promise<{ count: any }> {

        try {
            this.logger.silly('Count query');

            const count = await this.CorporateFormModel.countDocuments(search)

            return { count };

        } catch (e) {

            this.logger.error(e);
            throw e;
        }
    }

    public async getCorporates(search: any): Promise<{ corporates: any }> {

        try {
            this.logger.silly('Get Corporates');

            const corporates = await this.CorporateFormModel.find(search, { __v: 0 }).sort({ createdAt: -1 })

            return { corporates };

        } catch (e) {

            this.logger.error(e);
            throw e;
        }
    }

    public async deleteCorporate(Ids: any): Promise<{ deleteData: any }> {

        try {
            this.logger.silly('Deleting Corporate');

            const deleteData = await this.CorporateFormModel.updateMany({ _id: Ids.map((res: any) => Types.ObjectId(res)), isDeleted: false }, { isDeleted: true })

            return { deleteData };

        } catch (e) {

            this.logger.error(e);
            throw e;
        }
    }

}