class BrewHelper {

    static toLibs(kg) {
        return kg / 0.45359;
    }
    static toOz(kg) {
        return kg * 1000 * 0.035274;
    }
    static toGal(liters) {
        return liters * 0.264172052637296;
    }
    static toPpg(potential) {
        return potential * 1000 - 1000;
    }
    static toPotential(ppg) {
        return this.round((ppg + 1000) / 1000,1000);
    }
    static round (value, zeros) {
        return Math.round(value*zeros)/zeros;
    }
    static CalculateOG(grains, efficiency, strikeWater) {
        var og = 0;
        grains.forEach((grain) => {
            og+=(
                BrewHelper.toPpg(grain.extract)*
                BrewHelper.toLibs(grain.amount)*
                (efficiency / 100) 
                / 
                BrewHelper.toGal(strikeWater));
        });
        return BrewHelper.toPotential(og);
    }
}

export default BrewHelper;